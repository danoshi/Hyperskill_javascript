const decryptedMessages = [];


encryptedMessages.map(message => {
    /* write your code here */
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

    const updatedDecipher = decipher.update(message, 'hex', 'utf-8');
    const deciphered = updatedDecipher + decipher.final('utf-8');
    decryptedMessages.push(deciphered);
});
