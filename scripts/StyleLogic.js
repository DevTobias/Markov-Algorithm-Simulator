const $tableID = $('#markov_table');

const newTr = `
    <tbody>
        <tr>
            <td contenteditable="true" class="table_del"></td>
            <td contenteditable="true" class="table_del"></td>
            <td contenteditable="true" class="table_del"></td>
            <td contenteditable="true" class="table_del"></td>
        </tr>
    </tbody>`;

function func(event) {
    if (event.key === "Delete") {
      console.log(1);
    }
}

$('.table_add').on('click', 'button', () => {
    $tableID.append(newTr);
});

$tableID.on('keydown', '.table_del', function (event) {
    if(event.originalEvent.code == "Delete") $(this).parents('tbody').detach();
});