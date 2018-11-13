import os
import json
from flask import Flask, render_template, jsonify, request, send_from_directory
import inventory
from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper

try:
    unicode = unicode
except NameError:
    # 'unicode' is undefined, must be Python 3
    str = str
    unicode = str
    bytes = bytes
    basestring = (str, bytes)
else:
    # 'unicode' exists, must be Python 2
    str = str
    unicode = unicode
    bytes = str
    basestring = basestring

app = Flask(__name__)
static_dir = f'{os.path.abspath(os.path.join(__file__ ,"../../.."))}/public'
app = Flask(__name__, static_folder=static_dir)


def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator


@app.route('/')
@crossdomain(origin='*')
def home():
    return send_from_directory(static_dir, 'index.html')


# Serve config set up in .env
@app.route('/config')
@crossdomain(origin='*')
def get_config():
    return jsonify({
        'auth_key': os.getenv('AUTH_KEY_KEY'),
        'auth_key': os.getenv('USERID'),
        'currency': 'eur'
    })


@app.route('/javascripts/<path:path>', methods=['GET'])
def serve_js(path):
    return send_from_directory(f'{static_dir}/javascripts', path)


@app.route('/stylesheets/<path:path>', methods=['GET'])
def serve_css(path):
    return send_from_directory(f'{static_dir}/stylesheets', path)


@app.route('/images/<path:path>', methods=['GET'])
def serve_image(path):
    return send_from_directory(f'{static_dir}/images', path)


@app.route('/products', methods=['GET'])
@crossdomain(origin='*')
def get_products():
    return jsonify(list(inventory.products.values()))


@app.route('/products/<string:product_id>', methods=['GET'])
@crossdomain(origin='*')
def retrieve_product(product_id):
    pdt = inventory.products[int(product_id)]
    return jsonify(pdt)


@app.route('/orders/<string:product_id>', methods=['POST'])
@crossdomain(origin='*')
def make_order():
    # Creates a new Order with items that the user selected.

    return jsonify({'order': {}})


@app.route('/orders/<string:order_id>/pay', methods=['POST'])
@crossdomain(origin='*')
def pay_order(order_id):
    response = {}
    order = {}

    return jsonify({'order': order, 'source': {}})


@app.route('/payment_gateway_callback', methods=['POST'])
def callback_received():

    return jsonify({'status': 'success'})
