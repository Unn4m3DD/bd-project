module.exports = {
	"info": {
		"_postman_id": "ee209567-ee36-4b76-9667-978ba5fba73a",
		"name": "C-ITS Docs",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Stats",
			"item": [
				{
					"name": "car_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/car_count?start_time=1621172276&end_time=1621174276&location_quadtree=15011352623&quadtree_zoom=18&rsu_station_id=10",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"car_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1621172276",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1621174276",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "15011352623",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "rsu_station_id",
									"value": "10",
									"description": "(Optional) Array of station id of the emitter"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{baseUrl}}/events?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&station_id=[1, 2]",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"events"
									],
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Event listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Event listing end timestamp (seconds)"
										},
										{
											"key": "location_quadtree",
											"value": "16443191796",
											"description": "(Optional) Tile of the location from where the data must be queried"
										},
										{
											"key": "quadtree_zoom",
											"value": "18",
											"description": "(Optional) Zoom level of the data collected"
										},
										{
											"key": "station_id",
											"value": "[1, 2]",
											"description": "(Optional) Array of station id of the emitter"
										}
									]
								}
							},
							"_postman_previewlanguage": "json",
							"header": null,
							"cookie": [],
							"body": "{\"value\":27}"
						}
					]
				},
				{
					"name": "car_speed_average",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/car_speed_average?start_time=1621172276&end_time=1621174276&location_quadtree=15011352623&quadtree_zoom=18&rsu_station_id=10",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"car_speed_average"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1621172276",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1621174276",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "15011352623",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "rsu_station_id",
									"value": "10",
									"description": "(Optional) Array of station id of the emitter"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{baseUrl}}/events?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&station_id=[1, 2]",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"events"
									],
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Event listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Event listing end timestamp (seconds)"
										},
										{
											"key": "location_quadtree",
											"value": "16443191796",
											"description": "(Optional) Tile of the location from where the data must be queried"
										},
										{
											"key": "quadtree_zoom",
											"value": "18",
											"description": "(Optional) Zoom level of the data collected"
										},
										{
											"key": "station_id",
											"value": "[1, 2]",
											"description": "(Optional) Array of station id of the emitter"
										}
									]
								}
							},
							"_postman_previewlanguage": "json",
							"header": null,
							"cookie": [],
							"body": "{\"value\":73.5}"
						}
					]
				},
				{
					"name": "people_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/people_count?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"people_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": null
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\"value\":27}"
						}
					]
				}
			]
		},
		{
			"name": "Data",
			"item": [
				{
					"name": "notifications_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/notifications_list?start_time=1620223705&end_time=1620223708&location_quadtree=60045410497&emitter_id=1",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"notifications_list"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Notification listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Notification listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "60045410497",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "emitter_id",
									"value": "1",
									"description": "(Optional) IDs of the emitters"
								}
							]
						}
					},
					"response": [
						{
							"name": "List Notifications",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?start_time=1620223705&end_time=1620223708&emitter_id=101&location_quadtree=60045410497",
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Notification listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Notification listing end timestamp (seconds)"
										},
										{
											"key": "emitter_id",
											"value": "101",
											"description": "ID of the emitter"
										},
										{
											"key": "location_quadtree",
											"value": "60045410497",
											"description": "Tile of the location from where the data must be queried"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        emitter_id: 101,\r\n        timestamp: 1620223705,\r\n        latitude: -86950224,\r\n        longitude: 412400078,\r\n        description: \"Speed limit exceeded\"\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "cams_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/cams_list?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&emitter_id=2&quadtree_zoom=18",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"cams_list"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Notification listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Notification listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Required) Tile of the location from where the data must be queried"
								},
								{
									"key": "emitter_id",
									"value": "2",
									"description": "(Optional) ID of the emitters"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected"
								}
							]
						}
					},
					"response": [
						{
							"name": "List CAMs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?start_time=1620223705&end_time=1620223708&emitter_ids=2",
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Notification listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Notification listing end timestamp (seconds)"
										},
										{
											"key": "emitter_ids",
											"value": "2",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n      \"1620223706\":\r\n      {\r\n        \"station_id\": 2,\r\n        \"latitude\": 148123123,\r\n        \"longitude\": 81231233,\r\n        \"perceived_objects\": [{\r\n          \"objectID\": 3,\r\n          \"xDistance\": 2,\r\n          \"yDistance\": 123,\r\n          \"xSpeed\": 111,\r\n          \"ySpeed\": 1231\r\n        },\r\n        {\r\n          \"objectID\": 4,\r\n          \"xDistance\": 2,\r\n          \"yDistance\": 123,\r\n          \"xSpeed\": 1112,\r\n          \"ySpeed\": 1231\r\n        },\r\n        {\r\n          \"objectID\": 5,\r\n          \"xDistance\": 321,\r\n          \"yDistance\": 123,\r\n          \"xSpeed\": 23,\r\n          \"ySpeed\": 111\r\n        }\r\n        ]\r\n      }\r\n    }"
						}
					]
				},
				{
					"name": "events",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/events?start_time=1621172276&end_time=1621174276&location_quadtree=15011352623&quadtree_zoom=17",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"events"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1621172276",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1621174276",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "15011352623",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "17",
									"description": "(Optional) Zoom level of the data collected"
								},
								{
									"key": "emitter_id",
									"value": "1",
									"description": "(Optional) Filter per station_id",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Example for a Database with only CPMs stored",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{baseUrl}}/events?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"events"
									],
									"query": [
										{
											"key": "start_time",
											"value": "1620223705"
										},
										{
											"key": "end_time",
											"value": "1620223708"
										},
										{
											"key": "location_quadtree",
											"value": "16443191796"
										},
										{
											"key": "quadtree_zoom",
											"value": "18"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "x-next",
									"value": "cillum proident adipisicing qui do",
									"description": "A link to the next page of responses"
								},
								{
									"key": "Content-Type",
									"value": "application/json"
								}
							],
							"cookie": [],
							"body": "{\n  \"1620223705\": {\n    \"cpm\": [\n      {\n        \"station_id\": 2,\n        \"longitude\": 81231233,\n        \"latitude\": 148123123,\n        \"perceived_objects\": [\n          {\n            \"objectID\": 3,\n            \"xDistance\": 2,\n            \"yDistance\": 123,\n            \"xSpeed\": 111,\n            \"ySpeed\": 1231\n          },\n          {\n            \"objectID\": 4,\n            \"xDistance\": 2,\n            \"yDistance\": 123,\n            \"xSpeed\": 1112,\n            \"ySpeed\": 1231\n          },\n          {\n            \"objectID\": 5,\n            \"xDistance\": 321,\n            \"yDistance\": 123,\n            \"xSpeed\": 23,\n            \"ySpeed\": 111\n          }\n        ]\n      }\n    ],\n    \"cam\": [],\n    \"vam\": [],\n    \"denm\": []\n  }\n}"
						}
					]
				},
				{
					"name": "obu_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/obu_list?emitter_ids=[2]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"obu_list"
							],
							"query": [
								{
									"key": "emitter_ids",
									"value": "[2]",
									"description": "(Optional) IDs of the emitters IDs of the emitters"
								}
							]
						},
						"description": "Lists all the obus"
					},
					"response": [
						{
							"name": "Listing OBUs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": ""
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        emitter_id: 150,\r\n        last_power_status: 70\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "rsu_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/rsu_list?emitter_ids=[100, 1337]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"rsu_list"
							],
							"query": [
								{
									"key": "emitter_ids",
									"value": "[100, 1337]",
									"description": "(Optional) IDs of the emitters"
								}
							]
						}
					},
					"response": [
						{
							"name": "List RSUs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?emitter_ids=[100, 1337]",
									"query": [
										{
											"key": "emitter_ids",
											"value": "[100, 1337]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        emitter_id: 100,\r\n        latitude: -86950224,\r\n        longitude: 412400078,\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "smartphone_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/smartphone_list?emitter_ids=[101, 102]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"smartphone_list"
							],
							"query": [
								{
									"key": "emitter_ids",
									"value": "[101, 102]",
									"description": "(Optional) IDs of the emitters"
								}
							]
						}
					},
					"response": [
						{
							"name": "List Smartphone users",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?emitter_ids=[101, 102]",
									"query": [
										{
											"key": "emitter_ids",
											"value": "[101, 102]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        emitter_id: 101,\r\n        last_power_status: 100, \r\n        configured_language: \"pt\"\r\n    },\r\n    {\r\n        emitter_id: 102,\r\n        configured_language: \"en\",\r\n        current_app_version: \"1.1\"\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "web_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/web_list?emitter_ids=[101]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"web_list"
							],
							"query": [
								{
									"key": "emitter_ids",
									"value": "[101]",
									"description": "(Optional) IDs of the emitters"
								}
							]
						}
					},
					"response": [
						{
							"name": "List website users",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?emitter_ids=[101]",
									"query": [
										{
											"key": "emitter_ids",
											"value": "[101]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        emitter_id: 101,\r\n        browser_version: \"Safari 6\",\r\n        configured_language: \"pt\"\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "cpms_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/cpms_list?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&emitter_id=2&quadtree_zoom=18",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"cpms_list"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Notification listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Notification listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "emitter_id",
									"value": "2",
									"description": "(Optional) ID of the emitters"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected"
								}
							]
						}
					},
					"response": [
						{
							"name": "List CPMs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?start_time=1620223705&end_time=1620223708&emitter_ids=[2, 99]",
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Notification listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Notification listing end timestamp (seconds)"
										},
										{
											"key": "emitter_ids",
											"value": "[2, 99]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n      \"1620223706\":[\r\n          \r\n      {\r\n      \"station_id\": 2,\r\n      \"station_type\": 1,\r\n      \"timestamp\": 1620223706,\r\n      \"latitude\": 148123123,\r\n      \"longitude\": 81231233,\r\n      \"speed\": 130\r\n  }\r\n      ],\r\n   \"1620223707\":[\r\n      {\r\n      \"station_id\": 99,\r\n      \"station_type\": 3,\r\n      \"timestamp\": 1620223707,\r\n      \"latitude\": 148122123,\r\n      \"longitude\": 81230233,\r\n      \"speed\": 145\r\n      }]\r\n    }"
						}
					]
				},
				{
					"name": "vams_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/vams_list?start_time=1610223705&end_time=1621293708&emitter_id=3&location_quadtree=16443191796&quadtree_zoom=18",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"vams_list"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1610223705",
									"description": "(Required) Notification listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1621293708",
									"description": "(Required) Notification listing end timestamp (seconds)"
								},
								{
									"key": "emitter_id",
									"value": "3",
									"description": "(Optional) ID of the emitters"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected"
								}
							]
						}
					},
					"response": [
						{
							"name": "List VAMs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?start_time=1620223705&end_time=1620223708&emitter_ids=[2,99]",
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Notification listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Notification listing end timestamp (seconds)"
										},
										{
											"key": "emitter_ids",
											"value": "[2,99]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n      \"1620223706\":[\r\n      {\r\n        \"station_id\": 2,\r\n        \"station_type\": 1,\r\n        \"timestamp\": 1620223705,\r\n        \"latitude\": 148123123,\r\n        \"longitude\": 81231233\r\n      }\r\n      ]\r\n    }"
						}
					]
				},
				{
					"name": "denms_list",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/denms_list?start_time=1620223705&end_time=9620223708",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"denms_list"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Notification listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "9620223708",
									"description": "(Required) Notification listing end timestamp (seconds)"
								},
								{
									"key": "emitter_ids",
									"value": "[2,99]",
									"description": "(Optional) IDs of the emitters",
									"disabled": true
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried",
									"disabled": true
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "List DENMs",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "?start_time=1620223705&end_time=1620223708&emitter_ids=[2,99]",
									"query": [
										{
											"key": "start_time",
											"value": "1620223705",
											"description": "(Required) Notification listing start timestamp (seconds)"
										},
										{
											"key": "end_time",
											"value": "1620223708",
											"description": "(Required) Notification listing end timestamp (seconds)"
										},
										{
											"key": "emitter_ids",
											"value": "[2,99]",
											"description": "IDs of the emitters"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n    \"1620223706\":\r\n    [{\r\n    \"station_id\": 2,\r\n    \"station_type\": 1,\r\n    \"timestamp\": 1620223705,\r\n    \"latitude\": 148123123,\r\n    \"longitude\": 81231233,\r\n    \"cause_code\": 3,\r\n    \"sub_cause_code\": 1,\r\n    \"duration\": 200,\r\n}]\r\n}"
						}
					]
				},
				{
					"name": "event_timestamps",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/event_timestamps?time_interval=[1621172002, 1621172253]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"event_timestamps"
							],
							"query": [
								{
									"key": "time_interval",
									"value": "[1621172002, 1621172253]",
									"description": "(Optional) Filter by Time Interval"
								}
							]
						}
					},
					"response": [
						{
							"name": "event_timestamps",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "{{baseUrl}}/event_timestamps?time_interval=[1620223705, 1620223715]",
									"host": [
										"{{baseUrl}}"
									],
									"path": [
										"event_timestamps"
									],
									"query": [
										{
											"key": "time_interval",
											"value": "[1620223705, 1620223715]",
											"description": "(Optional) Filter by Time Interval"
										}
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[[1620223705, 1620223712]]"
						}
					]
				}
			]
		},
		{
			"name": "Optional",
			"item": [
				{
					"name": "min_simultaneous_car_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/min_simultaneous_car_count?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&timte_interval=10&station_id=[1, 2]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"min_simultaneous_car_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "timte_interval",
									"value": "10",
									"description": "(Optional) Time interval considered simultaneos (seconds) (default: 10s)"
								},
								{
									"key": "station_id",
									"value": "[1, 2]",
									"description": "(Optional) Array of station id of the emitter"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": null
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\"value\":5}"
						}
					]
				},
				{
					"name": "max_simultaneous_car_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/max_simultaneous_car_count?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&timte_interval=10&station_id=[1, 2]",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"max_simultaneous_car_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "timte_interval",
									"value": "10",
									"description": "(Optional) Time interval considered simultaneos (seconds) (default: 10s)"
								},
								{
									"key": "station_id",
									"value": "[1, 2]",
									"description": "(Optional) Array of station id of the emitter"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": null
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\"value\":12}"
						}
					]
				},
				{
					"name": "min_simultaneous_people_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/min_simultaneous_people_count?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&timte_interval=10",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"min_simultaneous_people_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "timte_interval",
									"value": "10",
									"description": "(Optional) Time interval considered simultaneos (seconds) (default: 10s)"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": null
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\"value\":4}"
						}
					]
				},
				{
					"name": "max_simultaneous_people_count",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{baseUrl}}/max_simultaneous_people_count?start_time=1620223705&end_time=1620223708&location_quadtree=16443191796&quadtree_zoom=18&timte_interval=10",
							"host": [
								"{{baseUrl}}"
							],
							"path": [
								"max_simultaneous_people_count"
							],
							"query": [
								{
									"key": "start_time",
									"value": "1620223705",
									"description": "(Required) Event listing start timestamp (seconds)"
								},
								{
									"key": "end_time",
									"value": "1620223708",
									"description": "(Required) Event listing end timestamp (seconds)"
								},
								{
									"key": "location_quadtree",
									"value": "16443191796",
									"description": "(Optional) Tile of the location from where the data must be queried"
								},
								{
									"key": "quadtree_zoom",
									"value": "18",
									"description": "(Optional) Zoom level of the data collected (default: 18)"
								},
								{
									"key": "timte_interval",
									"value": "10",
									"description": "(Optional) Time interval considered simultaneos (seconds) (default: 10s)"
								}
							]
						}
					},
					"response": [
						{
							"name": "example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": null
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\"value\":18}"
						}
					]
				}
			]
		}
	],
	"variable": [
		{
			"key": "baseUrl",
			"value": "http://ccam.av.it.pt/api",
			"type": "string"
		}
	]
}