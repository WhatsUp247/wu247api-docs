# How To Use

Base URL: https://api.whatsup247.com

This API exposes the following endpoints:

| Endpoint     | Method | URL                 | Description                                                    |
| :----------- | :----- | :------------------ | :------------------------------------------------------------- |
| Events       | GET    | `/events`           | Returns a list of events based on the paramaters passed        |
| Event        | GET    | `/events/:id`       | Return one event based on the event ID                         |
| Directory    | GET    | `/directory`        | Returns a list of organizations based on the paramaters passed |
| Organization | GET    | `/directory/:id`    | Return a list of events based on the paramaters                |
| Destinations | GET    | `/destinations`     | Returns a list of destinations based on the paramaters passed  |
| Destination  | GET    | `/destinations/:id` | Return a list of events based on the paramaters                |

## Organization Specific Events, Directory, Destinations

| Options         | Required | Type     | Defaults | Decription                                                        |
| :-------------- | :------- | :------- | :------- | :---------------------------------------------------------------- |
| organization_id | &check;  | `string` | &mdash;  | Organization's id to know which organization is being referrenced |
| copromotion     | &times;  | `string` | &mdash;  | Determines which organizations content to also display            |
| categories      | &times;  | `string` | &mdash;  | List of keys separated by commas                                  |
| limit           | &times;  | `number` | 20       | Number of items to return                                         |

## Area Specific Events, Directory, Destinations

| Options                | Required | Type     | Defaults                | Decription                                           |
| :--------------------- | :------- | :------- | :---------------------- | :--------------------------------------------------- |
| zip                    | &check;  | `string` | &mdash;                 | Zip Code of the area to be center of results         |
| distance               | &times;  | `string` | 30                      | Determines the radius in miles around the zip code   |
| categories             | &times;  | `string` | &mdash;                 | List of keys separated by commas                     |
| limit                  | &times;  | `number` | 20                      | Number of items to return                            |
| search                 | &times;  | `string` | &mdash;                 | Search term for data to match                        |
| dateFrom (Events only) | &times;  | `string` | "current date"          | Determines the date to start the pulling data from   |
| dateTo (Events only)   | &times;  | `string` | "1 month from dateFrom" | Determines the date to end the pulling data from     |
| page (Events only)     | &times;  | `number` | 1                       | Page to start display data                           |
| private (Events only)  | &times;  | `number` | 0                       | 0 to show public events and 1 to show private events |
| offset (Events only)   | &times;  | `number` | 0                       | Item number to start viewing data from               |
