json.array!(@events) do |event|
  json.extract! event, :id, :eventName, :eventPlan, :eventAppearance, :eventAlcohol
  json.url event_url(event, format: :json)
end
