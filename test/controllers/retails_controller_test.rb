require 'test_helper'

class RetailsControllerTest < ActionController::TestCase
  setup do
    @retail = retails(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:retails)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create retail" do
    assert_difference('Retail.count') do
      post :create, retail: { rentailAppearance: @retail.rentailAppearance, retailBrand: @retail.retailBrand, retailName: @retail.retailName, retailSell: @retail.retailSell }
    end

    assert_redirected_to retail_path(assigns(:retail))
  end

  test "should show retail" do
    get :show, id: @retail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @retail
    assert_response :success
  end

  test "should update retail" do
    patch :update, id: @retail, retail: { rentailAppearance: @retail.rentailAppearance, retailBrand: @retail.retailBrand, retailName: @retail.retailName, retailSell: @retail.retailSell }
    assert_redirected_to retail_path(assigns(:retail))
  end

  test "should destroy retail" do
    assert_difference('Retail.count', -1) do
      delete :destroy, id: @retail
    end

    assert_redirected_to retails_path
  end
end
