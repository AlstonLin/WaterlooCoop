class Job < ApplicationRecord
  include IdentityCache
  # Associations  
  has_many :skills, :class_name => "Skill"
  has_many :reviews, :class_name => "Review"
  belongs_to :company, :class_name => "Company"
  # Validations
  validates :title, :presence => true
  validates :industry, :presence => true
  # Search
  searchkick
  # Caching
  cache_belongs_to :company
end
