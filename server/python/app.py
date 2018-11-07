import os
import json
from flask import Flask, render_template, jsonify, request, send_from_directory
app = Flask(__name__)
import inventory
static_dir = f'{os.path.abspath(os.path.join(__file__ ,"../../.."))}/public'
app = Flask(__name__, static_folder=static_dir)


@app.route('/')
def home():
    return send_from_directory(static_dir, 'index.html')


# Serve config set up in .env
@app.route('/config')
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
def get_products():
    return jsonify(list(inventory.products.values()))


@app.route('/products/<string:product_id>', methods=['GET'])
def retrieve_product(product_id):
    pdt = inventory.products[int(product_id)]
    return jsonify(pdt)


@app.route('/orders/<string:product_id>', methods=['POST'])
def make_order():
    # Creates a new Order with items that the user selected.

    return jsonify({'order': {}})


@app.route('/orders/<string:order_id>/pay', methods=['POST'])
def pay_order(order_id):
    response = {}
    order = {}

    return jsonify({'order': order, 'source': {}})


@app.route('/payment_gateway_callback', methods=['POST'])
def callback_received():

    return jsonify({'status': 'success'})
