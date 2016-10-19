class Review < ApplicationRecord
  belongs_to :job, :class_name => "Job"
  belongs_to :author, :class_name => "User"
  validates :job, :presence => true
  validates :author, :presence => true
  validates :rating, :presence => true
  validates :salary, :presence => true
  validates :content, :presence => true
  validates :year, :presence => true
end
