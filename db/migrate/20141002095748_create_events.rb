class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :eventName
      t.text :eventPlan
      t.boolean :eventAppearance
      t.boolean :eventAlcohol

      t.timestamps
    end
  end
end
