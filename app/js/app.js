window.Chat = {
	Models: {},
	Collections: {},
	Views: {},
	
	start: function(data) {
		var messages = new Chat.Collections.Messages(data.messages);
		
		var messagesView = new Chat.Views.Messages({
			collection: messages,
		});
		
		$('.main-container').html(messagesView.render().$el);
		
		/* form */
		
		var messageFormView = new Chat.Views.MessageForm({
			model: new Chat.Models.Message(),
		});
		messageFormView.on('form:submitted', function(attrs) {
			messages.add(attrs, {validate: true});
		});
		$('.main-container').append(messageFormView.render().$el);		
	}
};