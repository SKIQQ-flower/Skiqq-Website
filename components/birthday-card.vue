<template>
    <div class="flex dark:bg-gray-800/20  bg-gray-300/40 w-11/12 p-5 flex-col sm:flex-row 
     rounded-3x justify-center items-center hover:transform-2 transition-all rounded-3xl">
        <Icon name="noto:birthday-cake" size="10rem"/>
        <div class="flex flex-col items-center">
            <h2>{{ $t('birthday_label') }}</h2>
            <h3>{{ $t('birthday_date') }}</h3>
        </div>
    </div>
</template>