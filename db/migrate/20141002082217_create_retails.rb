class CreateRetails < ActiveRecord::Migration
  def change
    create_table :retails do |t|
      t.string :retailName
      t.string :retailBrand
      t.string :rentailAppearance
      t.string :retailSell

      t.timestamps
    end
  end
end
