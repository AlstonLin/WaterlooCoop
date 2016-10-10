class Job < ApplicationRecord
  has_many :skills, :class_name => "Skill"
  has_many :reviews, :class_name => "Review"
  has_one :company, :class_name => "Company"
end
