class Job < ApplicationRecord
  has_many :skills, :class_name => "Skill"
  has_many :reviews, :class_name => "Review"
  belongs_to :company, :class_name => "Company"
  validates :title, :presence => true
  validates :industry, :presence => true
  searchkick
end
