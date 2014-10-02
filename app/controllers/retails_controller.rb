class RetailsController < ApplicationController
  before_action :set_retail, only: [:show, :edit, :update, :destroy]

  # GET /retails
  # GET /retails.json
  def index
    @retails = Retail.all
  end

  # GET /retails/1
  # GET /retails/1.json
  def show

  end

  # GET /retails/new
  def new
    @retail = Retail.new
  end

  # GET /retails/1/edit
  def edit
  end

  # POST /retails
  # POST /retails.json
  def create
    @retail = Retail.new(retail_params)

    respond_to do |format|
      if @retail.save
        format.html { redirect_to @retail, notice: 'Retail was successfully created.' }
        format.json { render :show, status: :created, location: @retail }
      else
        format.html { render :new }
        format.json { render json: @retail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /retails/1
  # PATCH/PUT /retails/1.json
  def update
    respond_to do |format|
      if @retail.update(retail_params)
        format.html { redirect_to @retail, notice: 'Retail was successfully updated.' }
        format.json { render :show, status: :ok, location: @retail }
      else
        format.html { render :edit }
        format.json { render json: @retail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /retails/1
  # DELETE /retails/1.json
  def destroy
    @retail.destroy
    respond_to do |format|
      format.html { redirect_to retails_url, notice: 'Retail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_retail
      @retail = Retail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def retail_params
      params.require(:retail).permit(:retailName, :retailBrand, :rentailAppearance, :retailSell)
    end
end
