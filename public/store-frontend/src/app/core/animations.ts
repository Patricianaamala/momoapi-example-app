import {
  animate,
  style,
  transition,
  trigger,
  state,
  AnimationTriggerMetadata
} from "@angular/animations";

// Component transition animations
export const slideInDownAnimation = trigger("routeAnimation", [
  state(
    "*",
    style({
      opacity: 1,
      transform: "translateX(0)"
    })
  ),
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translateX(-100%)"
    }),
    animate("0.2s ease-in")
  ]),
  transition(":leave", [
    animate(
      "0.5s ease-out",
      style({
        opacity: 0,
        transform: "translateY(100%)"
      })
    )
  ])
]);

export const horizontalStepTransition = trigger("routeAnimation", [
  state(
    "*",
    style({
      opacity: 1,
      transform: "none"
    })
  ),
  transition(":enter", [
    style({
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0
    }),
    animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")
  ]),
  transition(":leave", [
    style({
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0
    }),
    animate("500ms cubic-bezier(0.35, 0, 0.25, 1)")
  ])
]);
