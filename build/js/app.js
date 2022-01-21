$("#exampleModal").on('hidden.bs.modal', function (e) {
	$("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
});
