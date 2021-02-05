# Spare Change

## About

A site for crowdfunding social movements.  Users identify promising young visionaries, and browse funding goals, deadlines, and details to select a campaign.  As in groupon or kickstarter, when a pledge goal is met, all payments are made simultaneously.

This repo contains the client-side React app; for the API in Django, look [here](https://github.com/dtklumpp/bricks-api)

## Contents

  1. [Requirements](#Requirements)
  1. [Usage](#Usage)
  1. [Features](#Features)
  1. [Examples of Use](#Examples-of-Use)
  1. [Roadmap](#Roadmap)
  1. [Development](#Development)
  1. [License](#License)

## Requirements

Client:
- React 17.0.1
- Semantic-UI-react 2.0.1
- Typescript 4.0.5
- Typojson-client 3.0.0
- Visx/scale 1.1.0
- Recharts 1.8.5
- Slick-Carousel 1.8.1
- Ant-Design 4.7.3
- React-resizable 1.11.0
- React-router-dom 5.2.0
- React-sortable-hoc 1.11.0
- Craco 5.7.0
- SASS 2.4.1
- Tailwindcss 1.9.6

API
- Django 3.1.2
- psycopg2-binary 2.8.6
- PostgreSQL 12.4

## Usage

To clone and run this app, you'll need [Git](https://git-scm.com) as well as [npm](http://npmjs.com) installed on your computer.

First, set up the API.  From the command line:

1. Clone the API repo (`https://github.com/dtklumpp/bricks-api`)
1. Enter the repository `$ cd bricks-api`
1. Enter the virtual environment `$ source .env/bin/activate`
1. Exit .env at any time with `$ deactivate`
1. Install dependencies with `$ pip3 install -r requirements.txt`
1. Run the application `$ python3 manage.py runserver`

*Note: if Postgres is not yet installed, you will need to run:

```
$ brew install postgres
$ brew tap homebrew/services*
$ brew services start postgresql
```

To setup the database and create an admin user, run these commands:

```
$ createdb bricks-db
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py createsuperuser
```

Next, set up the Client-side app:

1. Clone this repo: `$ git clone https://github.com/dtklumpp/bricks-client`
1. Enter the repository: `$ cd bricks-client`
1. Install dependencies with `$ npm install`
1. Run the application `$ npm start`
1. View the app in your browser at `http://localhost:3000`

You should be good to go!

For testing, you can easily seed the database with some categories and projects by going to:

http://localhost:8000/admin/

...and logging in with the superuser account you just created

## Features
    
- Create a funding category
- Create a project (i.e. a social movement)
- Set a funding goal
- Set a deadline
- Browse projects by category
- Browse projects by organizer
- Browse projects by location
- Save personal category preferences
- CRUD everything...
- Accept payment via Paypal or Monero
- Populate trending movements
- Zoom in on the Map
- Comment on projects / campaigns
- Make a pledge

## Examples-of-Use

- [screenshots]

## Roadmap -- pending features

- Working project metrics
- Pick a campaign from the map
- Virtual account creation pre-signup
- Stripe integration
- Top Users / Investors view
- Drag-and-drop selected campaigns
- Add friends / view friends' projects
- Get notification when funding goes through
- Organizer images
- Advanced privacy settings

## Development

To help with a bug or add functionality, do this:

- Fork this repo
- Make a branch (`git checkout -b new-feature`)
- Make modifications where necessary
- Add comments corresponding to your changes
- Commit (`git commit -m 'explanation'`)
- Push up (`git push origin new-feature`)
- Make a Pull Request 

## License

MIT ©

## Notes
This idea has gone through several iterations throughout the years, and more than a few changes of name (Crowd-Thunder, anyone?).  Concerns about mis-use, as well as general lack of time on my part, have so far stalled its launch as a full-on business.  However, if you're interested in helping me get this off the ground for real, please shoot me a message!
