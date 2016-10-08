class Skill < ApplicationRecord
  hasMany :jobs, :class_name => "Job"
  hasMany :users, :class_name => "User"
end
