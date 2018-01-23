class GamesController < ActionController::API
  def create
    game = Game.new game_params

    if game.save
      render json: { code: game.code }
    else
      head :unprocessable_entity
    end
  end

  def show

  end

  def destroy
    game = Game.find_by_code params[:code]

    if game.blank?
      head :not_found
    else
      game.destroy
      head :no_content
    end
  end

  private

  def game_params
    params.require(:game).permit(:width, :height, :difficulty)
  end
end
