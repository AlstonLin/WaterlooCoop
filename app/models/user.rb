class User < ApplicationRecord
  hasMany :reviews, :class_name => "Review"
  hasMany :skills, :class_name => "Skill"
end
