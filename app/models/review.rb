class Review < ApplicationRecord
  has_one :job, :class_name => "Job"
  has_one :author, :class_name => "User"
end
