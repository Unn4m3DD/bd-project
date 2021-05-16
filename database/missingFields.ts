interface cam_t {
  last_power_status: number, //missing field
  current_app_version: number//missing field
}

interface vam_t {
  last_power_status: number, //missing field
  configured_language: string, //missing field
  current_app_version: number//missing field
}

interface denm_t {
  device_type: "web" | "smarthphone",
  configured_language?: string, //missing field
  browser_version?: string, //missing field
  current_app_version: number //missing field
}
