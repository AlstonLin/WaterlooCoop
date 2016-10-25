class Company < ApplicationRecord
  # Associations
  has_many :jobs, :class_name => "Job"
  # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  validates :location, :presence => true
  # Search
  searchkick
end
