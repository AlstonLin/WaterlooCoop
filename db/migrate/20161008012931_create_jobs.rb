class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.belongs_to :company
      t.string :title
      t.string :industry
      t.timestamps
    end
  end
end
