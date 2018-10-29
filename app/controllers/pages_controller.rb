class PagesController < ApplicationController
  def intro
    @user = OpenStruct.new(name: 'Bob')
  end
end
