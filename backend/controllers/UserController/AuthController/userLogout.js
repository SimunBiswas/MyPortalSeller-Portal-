


export const userLogout = (req, resp) => {
    resp.clearCookie('jwt');
    resp.cookie('jwt', null, { expires: new Date(Date.now()) , httpOnly: true });
    resp.status(200).json({
        success: true,
        message: 'Logout successful',
    });
};