import { Outlet } from "react-router-dom"
import { useSpring, animated } from "react-spring"

export default function BaseLayout() {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -50 },
    config: { duration: 1500 },
  })
  return (
    <div className="container">
      <animated.div style={props}>
        <Outlet />
      </animated.div>
    </div>
  )
}
