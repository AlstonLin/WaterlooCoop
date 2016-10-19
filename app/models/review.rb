class Review < ApplicationRecord
  belongs_to :job, :class_name => "Job"
  belongs_to :author, :class_name => "User"
end
