import mongoose from "./api.config";

export function getBusStop() {
  let newStopSchema = new mongoose.Schema({
    _id: { type: string },
    stop_id: { type: number },
    stop_name: { type: string },
    stop_lat: { type: number },
    stop_lon: { type: number },
  });

  return mongoose.model("stops", newBookSchema);
}
