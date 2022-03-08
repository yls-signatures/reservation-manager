import { Outlet } from "react-router-dom"
import { useSpring, animated } from "react-spring"

export default function BaseLayout() {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -10 },
    config: { duration: 500 },
  })
  return (
    <div className="container mt-5">
      <animated.div style={props}>
        <Outlet />
      </animated.div>
    </div>
  )
}
