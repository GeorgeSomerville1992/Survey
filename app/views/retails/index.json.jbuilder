json.array!(@retails) do |retail|
  json.extract! retail, :id, :retailName, :retailBrand, :rentailAppearance, :retailSell
  json.url retail_url(retail, format: :json)
end
