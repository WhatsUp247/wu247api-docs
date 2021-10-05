# Introduction

What'sUp 24/7 API gives developers the ability to access any event, directory and destination data to use in various projects. Because we believe to creating a quality of life around each individual that uses our platform, we built this API to further extended or platform. Users can not only have our data on their website, they will now be able to control the look and feel of our data on their website.

<!-- We ask all users of this API to partner with us in helping us keep this content up to date by reporting any issues if you believe the documentation is unclear or incorrect. We want to make sure that everyone is able to use our API with ease. -->

# Authentication

The API uses token based authentication with OAuth. You will need to request a token and pass that token when requesting data from the API. Every organization has to request their own API key and secret through the What'sUp 24/7 platform. However, each organization can request multiple keys for different projects.

# How To Use

Base URL: https://api.whatsup247.com
This API exposes the following endpoints:

| Endpoint     | Method | URL               | Description                                                    |
| :----------- | :----- | :---------------- | :------------------------------------------------------------- |
| Events       | GET    | /events           | Returns a list of events based on the paramaters passed        |
| Event        | GET    | /events/:id       | Return one event based on the event ID                         |
| Directory    | GET    | /directory        | Returns a list of organizations based on the paramaters passed |
| Organization | GET    | /directory/:id    | Return a list of events based on the paramaters                |
| Destinations | GET    | /destinations     | Returns a list of destinations based on the paramaters passed  |
| Destination  | GET    | /destinations/:id | Return a list of events based on the paramaters                |

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

## Categories Information

Below is the referrence tables for categories for each type of content (Events, Destinations, Directory):

### Directory Categories

| Key | Name                                 |
| :-- | :----------------------------------- |
| 0   | Misc                                 |
| 1   | Agriculture                          |
| 2   | Antiques                             |
| 3   | Arts & Entertainment                 |
| 4   | Auto & Motorcycle Services           |
| 5   | Business & Professional Services     |
| 6   | Cleaning Services                    |
| 7   | Community & Civic Organizations      |
| 8   | Construction/Equipment & Contractors |
| 9   | Dry Cleaners/Laundry                 |
| 10  | Education/School                     |
| 11  | Event Planning/Coordination          |
| 12  | Financial Products & Services        |
| 13  | Fitness & Personal Care              |
| 14  | Restaurants & Food Services          |
| 15  | Health Care/Rehab & Therapy          |
| 16  | Home & Garden                        |
| 17  | Websites & IT                        |
| 18  | Manufacturing                        |
| 19  | Media & Marketing                    |
| 20  | Pet Care & Services                  |
| 21  | Photo & Video Services               |
| 22  | Utilities                            |
| 23  | Real Estate                          |
| 24  | Faith/Religious                      |
| 25  | Retail & Shopping                    |
| 26  | Sports & Recreation                  |
| 27  | Transportation (Public)              |
| 28  | Travel & Lodging/Camping             |
| 29  | Transportation (Logistics)           |
| 30  | Auctions                             |
| 31  | Government Offices                   |
| 32  | Funeral Home Services                |
| 33  | Libraries/Museums                    |
| 34  | Senior/Elderly Services              |
| 35  | Social Services                      |
| 36  | Veterans                             |
| 37  | Breweries/Wineries & Distilleries    |
| 38  | Marine/Boating & Watercraft          |

### Destinations Categories

| Key | Name                                        |
| :-- | :------------------------------------------ |
| 0   | Misc                                        |
| 1   | Architecture & Installations                |
| 2   | Breweries, Distilleries & Wineries          |
| 3   | History: Cultural History & Markers         |
| 4   | Event Venues                                |
| 5   | Fairs & Festivals                           |
| 6   | History: Faith Heritage & Cemeteries        |
| 7   | Food & Culinary                             |
| 8   | Health & Fitness                            |
| 9   | History: Historic Cities, Towns & Districts |
| 10  | Libraries                                   |
| 11  | History: Museums & Collections              |
| 12  | Natural Spaces & Archaeology                |
| 13  | Parks & Preserves                           |
| 14  | Performing Arts & Entertainment             |
| 15  | Shopping & Antiques                         |
| 16  | History: Sports Heritage                    |
| 17  | Sports & Recreation                         |
| 18  | Arts & Artisans                             |
| 19  | Trails: Heritage & Byways                   |
| 20  | Trails: Hiking & Biking                     |
| 21  | Travel & Lodging                            |
| 22  | Agricultural Markets & Adventures           |
| 23  | Colleges & Universities                     |
| 24  | Marine/Boating & Watercraft                 |

### Events Categories

| Key | Name                          |
| :-- | :---------------------------- |
| 0   | Misc                          |
| 1   | Community/Civic Organizations |
| 2   | Volunteer Opportunities       |
| 3   | Social                        |
| 4   | Sports & Recreation           |
| 5   | Shopping                      |
| 6   | Food & Drink                  |
| 7   | Entertainment & Music         |
| 8   | Business                      |
| 9   | Faith/Religious               |
| 10  | Government                    |
| 11  | Fairs & Festivals             |
| 12  | Health & Fitness              |
| 13  | Education/School              |
| 14  | History                       |
| 15  | Auctions                      |
| 16  | Veterans                      |
| 17  | Cars & Bikes                  |
| 18  | Arts                          |
| 19  | Marine/Boating & Watercraft   |
