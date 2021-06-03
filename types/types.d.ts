

interface perceived_object_t {
  objectID: number,           // [0..255] this should be used to keep consistency
  xDistance: number,          //probably meters TODO: double check
  yDistance: number,          //probably meters TODO: double check
  xSpeed: number,             //probably meters TODO: double check
  ySpeed: number              //probably meters TODO: double check
}

interface cpm_t {
  station_id: string,
  timestamp_delta: number, // mod 65 536
  longitude: number, // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  latitude: number,  // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  perceived_objects: perceived_object_t[]
}

interface cam_t {
  station_id: string,
  timestamp_delta: number, // mod 65 536
  longitude: number, // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  latitude: number,  // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  station_type: StationType
}
interface vam_t {
  station_id: string,
  timestamp_delta: number, // mod 65 536
  longitude: number, // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  latitude: number,  // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  station_type: StationType,
  power_status: number,
  language: "pt" | "en",
}

interface denm_t {
  station_id: number,
  cause_code: number,
  sub_cause_code: number,
  latitude: number,           // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  longitude: number,          // C long, divide by 10e6 to get floating point 412400078 -> 41.2400078
  timestamp: number,          // EPOCH -> 2004/01/01 00:00:000, + 1072915200000 to get usual unix epoch
  validity_duration: number,  // ms
  station_type: StationType,   // enum see definition bellow
  origin: "web" | "mobile",
  language?: "pt" | "en",
  browser_name?: string,
  browser_version?: string,
  app_version: number,
}

export enum StationType {
  unknown = 0,
  pedestrian = 1,
  cyclist = 2,
  moped = 3,
  motorcycle = 4,
  passengerCar = 5,
  bus = 6,
  lightTruck = 7,
  heavyTruck = 8,
  trailer = 9,
  specialVehicles = 10,
  tram = 11,
  roadSideUnit = 15
}
interface timeline_t {
  [time: number]: {
    cpm: cpm_t[],
    cam: cam_t[],
    vam: vam_t[],
    denm: denm_t[]
  }
}