import Stop from '../../components/Stop'

const stops = [
    {
      stop_id: "233C-10",
      shape_id: 59558,
      stop_color: "#FFD100",
      stop_text_color: "#000000",
      trip_id: "233C-10-0",
      stop_long_name: "Ceret",
      next_bus: "5min"
    },
    {
      stop_id: "407L-10",
      shape_id: 80728,
      stop_color: "#DA291C",
      stop_text_color: "#FFFFFF",
      trip_id: "407L-10-0",
      stop_long_name: "Barro Branco",
      next_bus: "5min"
    }
]

const StopMap = () => {
    return stops.map((stop, index) => (
        <Stop key={index} data={stop} />
    ))
}

export default StopMap