class ChangeStringFormatInIdeas < ActiveRecord::Migration
  def up
    change_column :retails, :rentailAppearance, :boolean
  end
  def down
    change_column :retails, :rentailAppearance, :string
  end   
end