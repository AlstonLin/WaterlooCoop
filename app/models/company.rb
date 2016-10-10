class Company < ApplicationRecord
  has_many :jobs, :class_name => "Job"
  validates :name, :presence => true
  validates :description, :presence => true
  validates :location, :presence => true
end
