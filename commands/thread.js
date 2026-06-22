const thread = await channel.threads.create({
    name: 'heretics'
    autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
    reason: 'i needed to spread my faith'
});

console.log('Created thread; ${thread.name}');
