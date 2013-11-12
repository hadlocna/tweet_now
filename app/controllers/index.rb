get '/' do
  erb :index
end

post '/tweet' do
  @tweet_text = params[:tweet_text]
  tweet = put_tweet!
  p '-----tweet info-------'
  p tweet
  if request.xhr?
  tweet.text.to_json
  else
  redirect '/'
  end
end