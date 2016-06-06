Chat.Views.Messages = Backbone.View.extend({
	template: _.template( $('#tpl-messages').html() ),
	
	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
		this.listenTo(this.collection, 'all', this.render);
	},
	
	renderOne: function(message) {
		var itemView = new Chat.Views.Message({model: message});
		this.$('.messages').append(itemView.render().$el);
	},	
	
	render: function() {
		var html = this.template();
		this.$el.html(html);
		
		this.collection.each(this.renderOne, this);
		
		return this;	
	},
	
});