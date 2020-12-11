# group d'etat
groupon for revolutions / kickstarter for social change
- An app for funding social movements that allows organizers to create projects with funding goals, and allows members to commit to funding projects assuming their pledge goal is hit.



## mvp features
- allow user and organizer signup
- allow project creation and CRUD
- allow funding of projects
- allow user viewering / perusal of projects

## stretch goals
- comments
- project metrics
- tiled "pick your interests" page
- project map
- trending projects flow
- flashy project-leader view
- virtual account creation pre-signup
- actual Stripe integration (rather than just "pledge")
- users / top investors view
- as always, drag-and-drop (who cares of what)
- see friends' projects
- text / email users when funding goes through

## user stories
- user logs on, sees themed splash page
- user clicks through to list of top projects
- user clicks through to project view
- {user can select project categories of interest}
- user can see funding metrics and decide whether to fund
- user view dashboard of projects, etc
- on trying to fund, user prompted for simple account creation
- {stretch: user enter actual card info (only for real-world production)}
- user can log out
- organizer user account can CRUD projects

## milestones
- Mon-Tue: basic backend
- Wed-Thu: basic frontend
- Fri-Sat: advanced backend
- Sun-Mon: advanced frontend
- Tue-Wed: stretch goals
- Thu: deploy and prep presentation

## models and properties
1. User
    - name
    - image
    - email
    - auth creds
    - organizer (boolean)
    - funded projects (relation)
    - matched categories (relation)
    - isOrganizer (boolean)
    - friends (user relation)
    - Stripe info (stretch goal)
2. Project
    - name
    - image
    - organizer (user relation)
    - funding goal
    - deadline date
3. Pledge
    - amount
    - date
    - user (relation)
    - project (relation)
    - Stripe info (stretch goal)
4. Category
    - name
    - image
    - has_many: projects
    - description
5. Comments (stretch goal)
    - user (relation)
    - project (relation)
    - text
    - datetime


## technologies to include
- React (or jQuery??  help!)
- Django (or Flask?) (or Express??  help!)
- PostgreSQL (or Mongo??  help!)
- JWT (probably)
- boatload of APIs
- Bootstrap
- AntDesign or Material-UI components
- deploy: Heroku or AWS

## wireframes
-see wireframe doc

## ERDs
-see ERDs doc

## Feasibility
- main challenge a.t.m. to decide on the stack
