class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response  
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private
    def user_params
        params.permit(:firstName, :lastName, :email, :username, :password)
    end

    def unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
