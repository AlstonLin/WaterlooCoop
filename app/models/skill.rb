class Skill < ApplicationRecord
  has_many :jobs, :class_name => "Job"
  has_many :users, :class_name => "User"
end
