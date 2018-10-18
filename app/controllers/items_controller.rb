class ItemsController < ApplicationController
  def create
    @cart = Cart.find(param[:cart_id])
    @item = @cart.items.build

    respond_to do |format|
      if @item.save
        format.html
        render json: { count: @cart.items.count }
      else
        format.html { render @cart }
        render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
end
