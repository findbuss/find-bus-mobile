import Bus from '../../components/Bus'

const buses = [
    {
      route_id: "233C-10",
      shape_id: 59558,
      route_color: "#FFD100",
      route_text_color: "#000000",
      trip_id: "233C-10-0",
      route_long_name: "Ceret",
      next_bus: "5min"
    },
    {
      route_id: "407L-10",
      shape_id: 80728,
      route_color: "#DA291C",
      route_text_color: "#FFFFFF",
      trip_id: "407L-10-0",
      route_long_name: "Barro Branco",
      next_bus: "5min"
    }
]

const BusMap = () => {
    return buses.map((busLine, index) => (
        <Bus key={index} data={busLine} />
    ))
}

export default BusMap