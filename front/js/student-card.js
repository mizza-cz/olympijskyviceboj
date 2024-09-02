$(document).ready(function(){
    $('select[name="sovPeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&sovPeriodId=' + $(this).val() + '#sov-table-link';
    });

    $('select[name="sovComparePeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&sovComparePeriodId=' + $(this).val() + '#sov-table-link';
    });

    $('select[name="sovHistoryPeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&sovHistoryPeriodId=' + $(this).val() + '#sov-table-link';
    });

    $('select[name="ovovPeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&ovovPeriodId=' + $(this).val() + '#ovov-table-link';
    });

    $('select[name="ovovComparePeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&ovovComparePeriodId=' + $(this).val() + '#ovov-table-link';
    });

    $('select[name="ovovHistoryPeriodId"]').change(function(){
        location.href = $(this).attr('data-link') + '&ovovHistoryPeriodId=' + $(this).val() + '#ovov-table-link';
    });

});
