Chat.Views.Message = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',
	template: _.template( $('#tpl-message').html() ),
	
	events: {
		'click .delete-message': 'onClickDelete',
	},
	
	initialize: function() {
		var html = this.template(this.model.toJSON());
		this.$el.append(html);
		
		return this;	
	},
	
	onClickDelete: function(event) {
		event.preventDefault();
		this.model.collection.remove(this.model);	
	},
	
});