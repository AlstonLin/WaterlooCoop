class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :difficulty
      t.integer :rating
      t.integer :salary
      t.text :content
      t.datetime :startdate
      t.timestamps
    end
  end
end
