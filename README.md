# Waterloo Coop
A platform for students at the University of Waterloo to rate and share their experiences during their time working at internships. Build with Ruby on Rails and React.js

## Setup
- [Install](http://railsapps.github.io/installrubyonrails-ubuntu.html) Ruby 2.3.0 and Rails 5
- [Install ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html)
- Install memcached (Ubuntu: `sudo apt-get install memcached`)
- Install all the dependencies `bundle install`
- Set up the database `rake db:migrate`
- Setup Dalli cache server `rails c` -> `Dalli::Client.new` -> CTRL + D
- Start the server `rails s`
- Visit localhost:3000 in a browser

## The Stack
- Google MDL for Design
- React.js for Front End
- Ruby on Rails for Back End
- RSpec for testing

##### Testing
Run `rake spec`

Created by Alston Lin and William Yang
