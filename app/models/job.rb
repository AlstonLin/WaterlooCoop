class Job < ApplicationRecord
  hasMany :skills, :class_name => "Skill"
  hasMany :reviews, :class_name => "Review"
  hasOne :company, :class_name => "Company"
end
