<div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>
                                    Name
                                </label>
                                <input
                                    placeholder='Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Email'
                                    className={classes.label}
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='example@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className={`form-input ${classes.input}`}
                                />
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Message'
                                    className={classes.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='Message'
                                    className={`form-message ${classes.message}`}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                    type='submit'
                                    className={classes.submitBtn}
                                >
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>
