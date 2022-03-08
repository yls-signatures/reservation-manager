import { useSpring, animated } from "react-spring"

export default function Hero() {
  const props = useSpring({
    loop: true,
    from: { y: 0 },
    to: [{ y: 10 }, { y: 0 }],
    config: { duration: 3000 },
  })
  return (
    <div className="text-center mt-5">
      <h1 className="my-5">VP EXCLUSIVE</h1>
      {/* <animated.div style={{ ...props, zIndex: -1, position: "relative" }}>
        <img src="kaws-with-shadow-cropped.png" className="rounded-3 kaws-image my-5" />
      </animated.div> */}
    </div>
  )
}
